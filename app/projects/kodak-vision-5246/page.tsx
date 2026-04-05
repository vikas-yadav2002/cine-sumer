import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function KodakVision5246Page() {
  return (
    <ProjectTemplate
      title="Kodak Vision 5246 250D"

      videoUrl="https://www.youtube.com/watch?v=sf_ag5mvZSU"

      imagesPath="/work/kodakVision5246/6"

      imageCount={9}

      details={{
        negativeStock: "Kodak Vision 5246 250D",
        printStock: "Eastman EXR Color Print 5386",
        camera: "Arri Alexa 65",
      }}
    />
  );
}