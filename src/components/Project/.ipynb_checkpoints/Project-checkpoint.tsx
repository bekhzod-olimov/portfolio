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
                  <a href="https://github.com/bekhzod-olimov/SportsBallClassification" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/CT-Brain-Tumor-Classification" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/BrainTumorClassification" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/SportsImageClassification" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/Korean-Tourist-Spots-Classification" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/SportsBallClassification" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://github.com/bekhzod-olimov/Weight-Initialization-based-Rectified-Linear-Unit" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> </div>
                {/* </div> */}
            </header>
            <div className="body">
              <h3>Image classification task-related research</h3>
              <p> I have conducted extensive research and completed several projects focused on deep learning (DL)-based image classification, particularly in the areas of activation functions and model architecture. The outcomes of my research have been published in international SCIE journals, such as Nature Scientific Reports and Concurrency and Computation.  </p>
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
                  <a href="https://github.com/bekhzod-olimov/Binary-Semantic-Segmentation" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/PersonSemanticSegmentation" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/Semantic-Segmentation-Models-from-Scratch" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/Semantic-Segmentation-Models-from-Scratch" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://link.springer.com/article/10.1007/s00530-020-00726-w" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div> */}
                </div>
            </header>
            <div className="body">
              <h3>Semantic Segmentation task-related research</h3>
              <p> I have undertaken in-depth research and completed several projects focused on deep learning (DL)-based semantic segmentation, particularly in the fields of autonomous driving and medical imaging. The outcomes of my research have been published in international SCIE journals, such as IEEE Access and Multimedia Systems.  </p>
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
                  <a href="https://github.com/bekhzod-olimov/Object-Detection-with-YOLOv5" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://app.roboflow.com/bekhzod-olimov/disabled-sign-detection/1" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Object detection task-related research</h3>
              <p> I provided instruction to undergraduate students on conducting deep learning research, writing a scientific paper, and presenting it at a scientific conference. The research focused on detecting signs of disabled individuals in vehicles. The project was initiated from scratch, involving comprehensive tasks such as data collection, model formulation, and inference.  </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>RoboFlow</li> <li>YOLO</li> <li>Project from Scratch</li> </ul> </footer>
          </div>
        </ScrollAnimation>
          
          <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                  <a href="https://github.com/bekhzod-olimov/MedicalSemanticSegmentation3D" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Background Removal Project</h3>
              <p> I conducted on background removal using the latest deep learning-based binary semantic segmentation techniques. </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Semantic Segmentation</li> <li>PyTorch Lightning</li> <li>Background Removal</li> </ul> </footer>
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
              <p> I conceived an idea, wrote a proposal, and secured a National Research Fund of Korea grant for a three-year research period. The results of this research were published in SCIE journals, including "Computers & Industrial Engineering" with an impact factor of 6.7, and "Nature Scientific Reports".    </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Anomaly Detection</li> <li>Heatmap</li> <li>NRF Project</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://github.com/vitasoftAI/Crowd-Counting" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Crowd Counting-related research</h3>
              <p> Following the Seoul Halloween crowd crush in October 2022, we conducted research to identify densely populated areas and preemptively alert law enforcement about potential accidents using Deep Learning techniques.   </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Crowd Counting</li> <li>Dense Areas with People</li> <li>Efficient Computation</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                  <a href="https://github.com/bekhzod-olimov/Face-Verification-System-using-AI/tree/main" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Face Verification using AI Project</h3>
              <p> I developed a face verification system that can be used to check the attendance of students or employees at school or office. I used traditional and DL-based computer vision techniques during the project. This project is integrated to the various organizations in Uzbekistan. </p>
            </div>
            <footer> <ul className="tech-list"> <li>cv2</li> <li>face verification</li> <li>face recognition</li> <li>attendance</li> </ul> </footer>
          </div>
        </ScrollAnimation>
          
          <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                  <a href="https://github.com/bekhzod-olimov/MedicalSemanticSegmentation3D" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>3D Medical Image Segmentation task-related research</h3>
              <p> I conducted research on segmenting 3D medical image data (specifically, body organs, like spleen, prostate and so on along with dental nerve. The latter was a joint project with a South Korean dental clinic. The segmentation AI model is integrated to the South Korean dental clinic software. </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>3D medical data</li> <li>PyTorch Lightning</li> <li>Dentistry</li> </ul> </footer>
          </div>
        </ScrollAnimation>
          
          
          <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                  <a href="https://github.com/bekhzod-olimov/MedicalSemanticSegmentation3D" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>3D Medical Image Segmentation task-related research</h3>
              <p> I conducted research on segmenting 3D medical image data (specifically, body organs, like spleen, prostate and so on along with dental nerve. The latter was a joint project with a South Korean dental clinic. The segmentation AI model is integrated to the South Korean dental clinic software. </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>3D medical data</li> <li>PyTorch Lightning</li> <li>Dentistry</li> </ul> </footer>
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
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://3f9dbc0733876e6eea.gradio.live" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Visit site" /></a>
                  <a href="https://6dab7caa8b91ffbb3f.gradio.live" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Visit site" /></a>
                  <a href="https://30be4274529221742d.gradio.live" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Visit site" /></a></div>
            </header>
            <div className="body">
              <h3>Image Retrieval task-related research</h3>
              <p> I undertook in-depth research on developing a model for retrieving real-life images based on sketch images. The trained model was implemented to detect counterfeit luxury goods in the Customs office of the Republic of Korea and to detect used car parts in the GPARTS web-site.   </p>
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
              <p> I engaged in over 200 mini projects using open-source databases on Kaggle, focusing on various AI tasks including image classification, semantic segmentation, object detection, natural language processing, and more. </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>PyTorch Lightning</li> <li>Jupyter Notebook</li> <li>Kaggle</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a href="https://drive.google.com/file/d/17gJVC79Lk8k4Uly5egCGynl7RFvKF3cZ/view?usp=sharing" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Visit site" /></a>
                  <a href="https://github.com/bekhzod-olimov/Manga2WebtoonDevelopment" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://drive.google.com/file/d/19FdTXJUsFnTdWg1mb6rS-fltHz2iSXkk/view?usp=sharing" target="_blank" rel="noreferrer">
                  <img src={DownloadApp} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Manga2Webtoon using AI </h3>
              <p> Embarking on a project to convert Japanese and Chinese manga into Korean Webtoons using AI involves several sequential steps. These include segmenting parts using semantic segmentation, applying color to the original grayscale images using image generation models, extracting text from speech bubbles using Optical Character Recognition (OCR), and more.  </p>
            </div>
            <footer> <ul className="tech-list"> <li>PyTorch</li> <li>Semantic Segmentation</li> <li>OCR</li> <li>Object Detection</li> </ul> </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}