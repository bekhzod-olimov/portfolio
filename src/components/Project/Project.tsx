import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import scholarIcon from "../../assets/google_scholar.svg"
import kaggleIcon from "../../assets/kaggle.svg"
import DownloadApp from '../../assets/play.svg'
import classification from '../../assets/classification_2.svg'
import segment from '../../assets/segmentation.svg'
import detection from '../../assets/detection.svg'
import generation from '../../assets/generation.svg'
import kaggle2 from '../../assets/kaggle_2.svg'
import retrieval from '../../assets/retrieval.svg'
import crowd from '../../assets/crowd.svg'
import anomaly from '../../assets/anomaly.svg'
import coloring from '../../assets/coloring.svg'
import externalLink from "../../assets/pytorch.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/cpe.6143" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a>
                <a href="https://github.com/bekhzod-olimov/Weight-Initialization-based-Rectified-Linear-Unit" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> </div>
                {/* </div> */}
            </header>
            <div className="body">
              <h3>Image classification task-related research</h3>
              <p> Conducted extensive research and several projects using DL-based image classification in activation functions and DL-based model architecture. The outcomes of the research were published in an international SCIE journals, such as Nature Scientific Reports and Concurrency and Computation.  </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Activation function</li> <li>Efficient computation</li> <li>Model Architecture</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://link.springer.com/article/10.1007/s00530-020-00726-w" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a>
                  <a href="https://ieeexplore.ieee.org/abstract/document/9328441" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a>
                  <a href="https://ieeexplore.ieee.org/abstract/document/9617630" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a>
                {/* <a href="https://link.springer.com/article/10.1007/s00530-020-00726-w" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div> */}
                </div>
            </header>
            <div className="body">
              <h3>Semantic Segmentation task-related research</h3>
              <p> Conducted extensive research and several projects using DL-based semantic segmentation in autonomous driving and medical imaging. The outcomes of the research were published in an international SCIE journals, such as IEEE Access and Multimedia Systems.  </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>TensorFlow</li> <li>API Gateway</li> <li>Efficient Computing</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://drive.google.com/file/d/1dGANwOLx5tJ4cyUWY0pZ2QmxojFkGSHq/view?usp=sharing" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Visit site" /></a>
                  <a href="https://drive.google.com/file/d/1ssEaKjByDLLINOGvPhHg2rWeSC5IGUsN/view?usp=sharing" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a>
                <a href="https://app.roboflow.com/bekhzod-olimov/disabled-sign-detection/1" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Object detection task-related research</h3>
              <p> Instructed undergraduate students on how to conduct DL-research, write a scientific paper, and present it in an scientific conference.  </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>RoboFlow</li> <li>YOLO</li> <li>Project from Scratch</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0360835222003709" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a>
                  <a href="https://www.nature.com/articles/s41598-023-30480-8" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Anomaly detection-related research</h3>
              <p> Came up with an idea, wrote a proposal and attained National Research Fund of Korea grant for research for the period of 3 years. The results of the research were published in a SCIE papers named "Computers & Industrial Engineering" with an impact factor of 6.7 and Nature Scientific Reports.    </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Anomaly Detection</li> <li>Heatmap</li> <li>NRF Project</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0360835222003709" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a>
                  <a href="https://www.nature.com/articles/s41598-023-30480-8" target="_blank" rel="noreferrer">
                  <img src={scholarIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Crowd Counting-related research</h3>
              <p> After Seoul Halloween crowd crush in October, 2022, we conducted research to identify dense areas crowded with people and inform police forces about the possible accident in advance using Deep Learning techniques.    </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Crowd Counting</li> <li>Dense Areas with People</li> <li>Efficient Computation</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://github.com/vitasoftAI/Real-and-Synthetic-Korean-Licence-Plate-Generator" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/DataGenerationwithImagen" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Image Generation task-related research</h3>
              <p> Conducted research on generating vehicle registration plates of South Korea based on synthetic and real image data. The generated data was used to train an AI model of a "License Plate Recognition Parking Management System".   </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Image Generation</li> <li>GAN</li> <li>Imagen</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://github.com/bekhzod-olimov/Object-Classification-and-Classifier-Analysis" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/vitasoftAI/ImageRetrievalResearch" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/vitasoftAI/Recycle-Park" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Image Retrieval task-related research</h3>
              <p> Conducted research on retrieving real-life images based on the sketch images. The trained model was implemented to detect fake luxury goods in the Customs office of the Republic of Korea and to detect used car parts in the GPARTS web-site.   </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>PyTorch Lightning</li> <li>Triplet training</li> <li>Siamese network</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://www.kaggle.com/killa92/code" target="_blank" rel="noreferrer">
                  <img src={kaggleIcon} alt="Visit site" /></a>
                  <a href="https://www.kaggle.com/code/killa92/97-accurate-aerial-images-of-cities-classifier" target="_blank" rel="noreferrer">
                  <img src={kaggleIcon} alt="Visit site" /></a>
                  <a href="https://www.kaggle.com/code/killa92/100-acc-traffic-signs-classification-pytorch" target="_blank" rel="noreferrer">
                  <img src={kaggleIcon} alt="Visit site" /></a>
                  <a href="https://www.kaggle.com/code/killa92/miou-0-9-apple-disease-segmentation-pytorch" target="_blank" rel="noreferrer">
                  <img src={kaggleIcon} alt="Visit site" /></a>
                  <a href="https://www.kaggle.com/code/killa92/tomato-leaf-disease-detection-using-yolov9" target="_blank" rel="noreferrer">
                  <img src={kaggleIcon} alt="Visit site" /></a>
                  <a href="https://www.kaggle.com/code/killa92/hate-speech-image-visualization-classification" target="_blank" rel="noreferrer">
                  <img src={kaggleIcon} alt="Visit site" /></a>
                  <a href="https://www.kaggle.com/code/killa92/tweets-vis-classification-using-transformers" target="_blank" rel="noreferrer">
                  <img src={kaggleIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Kaggle Projects using open source databases</h3>
              <p> Completed 200+ mini projects using open source databases in Kaggle in various AI tasks, such as image classification, semantic segmentation, object detection, natural language processing and so on. </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>PyTorch Lightning</li> <li>Jupyter Notebook</li> <li>Kaggle</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://drive.google.com/file/d/1MFbHKJUK0ZdaG1JVFUrElkloGnJUA5Zg/view?usp=sharing" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Visit site" /></a>
                  <a href="https://drive.google.com/file/d/19FdTXJUsFnTdWg1mb6rS-fltHz2iSXkk/view?usp=sharing" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Manga2Webtoon using AI </h3>
              <p> Going on project on converting Japanese and Chinese manga to Korean Webtoon using AI. The complete project contains several steps including cutting the parts using semantic segmentation, coloring the original grayscale image using image generation models, reading callouts using OCR method and so on.  </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Semantic Segmentation</li> <li>OCR</li> <li>Object Detection</li> </ul> </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}