export const copyString = (value: string) => {
  navigator.clipboard.writeText(value);
};

export const copyRichHtml = (value: string) => {
  const blobHtml = new Blob([value], { type: "text/html" });
  const blobText = new Blob([value], { type: "text/plain" });

  navigator.clipboard.write([
    new ClipboardItem({
      "text/plain": blobText,
      "text/html": blobHtml,
    }),
  ]);
};
