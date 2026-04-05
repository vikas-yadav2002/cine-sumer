import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function KodakVision35212Page() {
  return (
    <ProjectTemplate
      title="Kodak Vision3 5212 100T"

      videoUrl="https://www.youtube.com/watch?v=I2ehOrEqnnI"

      imagesPath="/work/kodakVision3/3"

      imageCount={9}

      details={{
        negativeStock: "Kodak Vision3 5212 100T",
        printStock: "Kodak 2383 | D60",
        camera: "Arri Alexa 35",
      }}
    />
  );
}