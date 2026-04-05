import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function EastmanColorPrintPage() {
  return (
    <ProjectTemplate
      title="Eastman Color Print"

      videoUrl="https://www.youtube.com/embed/men2wF-JVj4"

      imagesPath="/work/EastmanColorPrint/12"

      imageCount={9}

      details={{
        negativeStock: "Eastman Color Print 5385",
        printStock: "Kodak 2383 | 50D",
        camera: "Sony a7S III",
      }}
    />
  );
}