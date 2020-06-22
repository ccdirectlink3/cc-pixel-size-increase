const MAX_PIXEL_SIZE = 9;

let pixelSizeChoices = sc.OPTIONS_DEFINITION['pixel-size'].data;
let defaultMaxPixelSize = Object.keys(pixelSizeChoices).length;
for (let i = defaultMaxPixelSize; i < MAX_PIXEL_SIZE; i++) {
  pixelSizeChoices[`BBB${i}`] = i;
}

ccmod3.resources.jsonPatches.add('data/lang/sc/gui.en_US.json', (data) => {
  let pixelSizeChoiceLabels = data.labels.options['pixel-size'].group;
  for (let i = defaultMaxPixelSize; i < MAX_PIXEL_SIZE; i++) {
    pixelSizeChoiceLabels.push(String(i + 1));
  }
});
