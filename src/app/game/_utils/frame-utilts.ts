import { Frame } from "../_models/frame";

export const createFrames = (numberOfFrames: number) => {
    const frames: Frame[] = [];

    let tempPreviousFrame = undefined;

    for (let i = 0; i < numberOfFrames; i++) {
        const currentNewFrame = new Frame();
        currentNewFrame.previousFrame.set(tempPreviousFrame);

        if (tempPreviousFrame) {
            tempPreviousFrame.nextFrame.set(currentNewFrame);
        }

        frames.push(currentNewFrame);

        tempPreviousFrame = currentNewFrame;
    }

    return frames;
}