import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function KodakVision25225Page() {
  return (
    <ProjectTemplate
      title="Kodak Vision 2 | 5225 250D"

      videoUrl="https://www.youtube.com/watch?v=rbTUzf3zpaM"

      imagesPath="/work/kodakVision25225/7"

      imageCount={6}

      details={{
        negativeStock: "Kodak Vision 2 | 5225 250D",
        printStock: "Eastman Color Print 5384",
        camera: "Blackmagic Pocket Cinema Camera 6K Pro",
      }}
    />
  );
}