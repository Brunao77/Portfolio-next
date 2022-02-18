import { Projects } from '../../../constants'
import { Project } from './components/Project'
export const Chrome = () => {
  return (
    <>
      <div>
        {Projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            repo={project.repo}
            web={project.web}
          />
        ))}
      </div>
      <style jsx>
        {`
          div {
            display: grid;
            height: 100%;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}
