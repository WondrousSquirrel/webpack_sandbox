# CONFIG-FILE

## структура файла
```
module.exports = {
    ...
};
```

## entry

Точка входа, определяющая какой модуль будут использоваться для построения графа зависимостей.
```entry: '.path/to/my/entry/file.js'```

## output 

Указывает куда загружать пакеты, которые он создает и имена этих файлов.
По умолчанию используется `/dist/main.js`основных файлов. Для всего остального папка `./dist`.
```output: {
    path: path.resolver(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
}```