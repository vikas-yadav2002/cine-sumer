import ProjectTemplate from "@/components/project/ProjectTemplate";

export default function FujiEternaPage() {
  return (
    <ProjectTemplate
      title="Fuji Eterna 8593 400T"

      videoUrl="https://www.youtube.com/embed/5FSETIo4124"

      imagesPath="/work/fujiEterna/2"

      imageCount={5}

      details={{
        negativeStock: "Fuji Eterna 8593 400T",
        printStock: "Kodak 2383 | 50D",
        camera: "RED SCARLET-W DRAGON 5K S35",
      }}
    />
  );
}