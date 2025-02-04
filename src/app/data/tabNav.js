import ImageGrid from "../components/ImageGrid";
import { gridImageData, gridImageBackendData, gridImageCMSData, gridImageDatabaseData } from "./gridImage";

export const tabData = [
    {
        label: "Front End",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageData} />,
    },
    {
        label: "Backend",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageBackendData} />
    },
    {
        label: "CMS",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageCMSData} />
    },
    {
        label: "Database",
        content: <ImageGrid bgColor="#232323" border="#232323" data={gridImageDatabaseData} />
    }
]