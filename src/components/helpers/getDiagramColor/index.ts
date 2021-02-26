import "./style.scss";

export type DiagramLevelsType = {
  diagramSliceClass: string;
  dotPreviewClass: string;
}[];

const LEVELS: DiagramLevelsType = [
  {
    diagramSliceClass: "diagram-slice-1",
    dotPreviewClass: "diagram-slice-1-dot",
  },
  {
    diagramSliceClass: "diagram-slice-2",
    dotPreviewClass: "diagram-slice-2-dot",
  },
  {
    diagramSliceClass: "diagram-slice-3",
    dotPreviewClass: "diagram-slice-3-dot",
  },
  {
    diagramSliceClass: "diagram-slice-4",
    dotPreviewClass: "diagram-slice-4-dot",
  },
];

export default function getDiagramColor(level: number): DiagramLevelsType[0] {
  const lvl = LEVELS[level - 1];
  if (!lvl) {
    return LEVELS[LEVELS.length - 1];
  } else {
    return lvl;
  }
}

export { getDiagramColor };
