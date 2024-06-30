import Project1Img from '../../assets/Project_1.png'
import Project2Img from '../../assets/Project_2.png'
import Project3Img from '../../assets/Project_3.png'
import './Projects.css';

const Projects = () => (
  <section id="projects">
      <p className="section_text_P1">Browse My Recent</p>
      <h1 className="name">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details color-container">
            <div className="article-container">
              <img src={Project1Img} alt="Connect Four" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Task Scheduler and Reminder</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari/Connect_Four'}>GitHub</button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari/Connect_Four'}>Live Demo</button>
            </div>
          </div>
          <div className="details color-container">
            <div className="article-container">
              <img src= {Project2Img} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Sidewalk Detection using SAM Model</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://huggingface.co/spaces/adhsandb05/SAMsidewalk/tree/main'}>GitHub</button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://huggingface.co/spaces/adhsandb05/SAMsidewalk'}>Live Demo</button>
            </div>
          </div>
          <div className="details color-container">
            <div className="article-container">
              <img src={Project3Img} alt="Convenience" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Convenience</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari/Post_blog_Django_Project'}>GitHub</button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://post-blog-django-project-git-main-sandeebs-projects.vercel.app/'}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default Projects;
