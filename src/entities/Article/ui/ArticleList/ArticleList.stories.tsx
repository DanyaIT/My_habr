
import { ArticleList } from './ArticleList';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoryFn , Meta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Article} from 'entities/Article';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ArticlesView } from '../../model/consts/articleConsts';

const article =  
{
   id: "1",
   title: "Javascript news Javascript news Javascript news Javascript news",
   subtitle: "Что нового в JS за 2023 год?",
   img: "https://i.pinimg.com/originals/5e/08/f5/5e08f5cd8c99a350852966820bca894f.jpg",
   view: 1022,
   user: {
    id: '1',
    username: 'Danya',
    avatar: 'https://adiariocr.com/wp-content/uploads/2018/06/Cibercrimen4.jpg'
   },
   createdAt: "26.07.2023",
   type: [
    "IT", "SCIENSE", "POLITIC"
   ],
   blocks: [
     {
       id: "1",
       type: "TEXT",
       title: "Заголовок этого блока",
       paragraphs: [
         "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
         "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
         "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
       ]
     },
     {
       id: "4",
       type: "CODE",
       code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>"
     },
     {
       id: "5",
       type: "TEXT",
       title: "Заголовок этого блока",
       paragraphs: [
         "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
         "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
       ]
     },
     {
       id: "2",
       type: "IMAGE",
       src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
       title: "Рисунок 1 - скриншот сайта"
     },
     {
       id: "3",
       type: "CODE",
       code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser)"
     },
     {
       id: "7",
       type: "TEXT",
       title: "Заголовок этого блока",
       paragraphs: [
         "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
         "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
       ]
     },
     {
       id: "8",
       type: "IMAGE",
       src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
       title: "Рисунок 1 - скриншот сайта"
     },
     {
       id: "9",
       type: "TEXT",
       title: "Заголовок этого блока",
       paragraphs: [
         "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
       ]
     }
   ]
 } as Article

export default {
   title: 'entities/ArticleList',
   component: ArticleList,
   decorators: [ThemeDecorator(Theme.NORMAL), RouterDecorator],
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof ArticleList>;

const Template: StoryFn <typeof ArticleList> = (args) => <ArticleList {...args}/>

export const List = Template.bind({});
List.args = {
   articles: new Array(3)
   .fill(0).map((_, index) => ({
      ...article,
      id: String(index)
   })),
   isLoading: false,
   view: ArticlesView.LIST
};


export const ListIsLoading = Template.bind({})
ListIsLoading.args = {
   articles: new Array(3)
   .fill(0).map((_, index) => ({
      ...article,
      id: String(index)
   })),
   isLoading: true,
   view: ArticlesView.LIST
}


export const Plate = Template.bind({})
Plate.args = {
   articles: new Array(9)
   .fill(0).map((_, index) => ({
      ...article,
      id: String(index)
   })),
   isLoading: false,
   view: ArticlesView.PLATE
}

export const PlateIsLoading = Template.bind({})
PlateIsLoading.args = {
   articles: new Array(9)
   .fill(0).map((_, index) => ({
      ...article,
      id: String(index)
   })),
   isLoading: true,
   view: ArticlesView.PLATE
}
