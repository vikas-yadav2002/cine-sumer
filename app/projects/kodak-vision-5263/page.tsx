import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function KodakVision5263Page() {
  return (
    <ProjectTemplate
      title="Kodak Vision 5263 500T"

      videoUrl="https://www.youtube.com/watch?v=OpzrQRSFZCs"

      imagesPath="/work/kodakVision5263/11"

      imageCount={5}

      details={{
        negativeStock: "Kodak Vision 5263 500T",
        printStock: "Kodak 2383 | 50D",
        camera: "Sony FX3",
      }}
    />
  );
}