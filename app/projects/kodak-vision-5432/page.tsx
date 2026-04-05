import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function KodakVision5246PremierPage() {
  return (
    <ProjectTemplate
      title="Kodak Vision 5246 250D"

      videoUrl="https://www.youtube.com/watch?v=hCizf4VuoaM"

      imagesPath="/work/kodakVision5432/5"

      imageCount={9}

      details={{
        negativeStock: "Kodak Vision 5246 250D",
        printStock: "Kodak Vision Premier Color 2393",
        camera: "Arri Amira",
      }}
    />
  );
}