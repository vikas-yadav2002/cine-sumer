import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function KodakVision3500TPage() {
  return (
    <ProjectTemplate
      title="Kodak Vision 3 | 500T"

      videoUrl="https://www.youtube.com/watch?v=6fGFE3szW_Y"

      imagesPath="/work/kodakVision3500T/9"

      imageCount={6}

      details={{
        negativeStock: "Kodak Vision 3 | 500T",
        printStock: "Eastman EXR Color Print 5386",
        camera: "Arri Alexa LF",
      }}
    />
  );
}