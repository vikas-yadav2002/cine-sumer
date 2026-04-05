import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function KodakVision25229Page() {
  return (
    <ProjectTemplate
      title="Kodak Vision 2 Express 5229 500T"

      videoUrl="https://www.youtube.com/watch?v=38CFuqGdsqk"

      imagesPath="/work/kodakvision2/4"

      imageCount={9}

      details={{
        negativeStock: "Kodak Vision 2 Express 5229 500T",
        printStock: "Kodak Vision Color Teleprint 2395",
        camera: "Arri Alexa 35",
      }}
    />
  );
}