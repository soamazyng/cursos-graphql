const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

//cria um projeto com base no arquivo de configuração do typescript na raiz
const tsProject = ts.createProject('tsconfig.json');

//escrevendo as tarefas
gulp.task('scripts', ['static'], () => {

  const tsResult = tsProject.src()
                    .pipe(tsProject()); // pega o nosso fonte e compila
  return tsResult.js
    .pipe(gulp.dest('dist'));
    
});

// pega os arquivos estáticos da pasta src e coloca na dist
// o segundo parametro ['task'] serve para indicar qual tarefa deve ser concluida para então essa tarefa rodar
gulp.task('static', ['clean'], () => {
  return gulp
          .src(['src/**/*.json'])
          .pipe(gulp.dest('dist'));
});

// tarefa responsavel por limpar o dist
gulp.task('clean', () => {
  return gulp
      .src('dist')
      .pipe(clean());
});

// vai chamar as outras tarefas na ordem correta
// passando só uma agora, quando a dependência dessa executar ai sim ela executa.
// desta forma a ordem atual ficaria assim scripts precisa de static e static precisa de clean
// 1 clean 2 static 3 scripts
gulp.task('build', ['scripts']);

// cria o listener das alterações do código
// o segundo parametro ['task'] serve para indicar qual tarefa deve ser concluida para então essa tarefa rodar
gulp.task('watch', ['build'], () => {
  return gulp.watch(['src/**/*.ts', 'src/**/*.json'], ['build']);
});

// tarefa default roda quando você escreve gulp sem passar o nome da tarefa
// segundo paramento é a tarefa que deve ser executada como default.
gulp.task('default', ['watch']);