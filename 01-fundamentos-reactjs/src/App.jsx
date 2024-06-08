import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/sidebar";

const posts = [
  {
    id:1,
    author: {
      avatarUrl:'https://github.com/jadersonfarias.png',
      name: 'jaderson farias',
      role: 'desenvolvedor junior'
    },
    content: [
      {type: 'paragraph', content: ' Fala pessoal 👋 ',},
      {type: 'paragraph', content: ' Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' ,},
      {type: 'paragraph', content: ' Acesse e deixe seu feedback 👉',},
      {type: 'link', content: 'devonlane.design',}  
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },

  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: ' Fala pessoal 👋 ',},
      {type: 'paragraph', content: ' Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' ,},
      {type: 'paragraph', content: ' Acesse e deixe seu feedback 👉',},
      {type: 'link', content: 'devonlane.design',}  
    ],
    publishedAt: new Date('2024-05-10 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
            {
              posts.map(post => {
                return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
                )
              })
            }
        </main>
      </div>
    </div>
  );
}
