import DrawToolsStore from 'src/store/DrawToolsStore';
import { createXAxis } from './createXAxis';
import { drawCurrentPriceLine } from './currentHR';
import { maintainHeadsUpHR } from './headsUpHR';
import { plotterDrawText } from './plotterDrawText';
import { overrideCalculateAwesome } from './calculateAwesome';
import { overrideFindHighlights } from './findHighlights';
import { overideMeasure } from './setMeasure';
import { overrideRenderEllipse } from './renderEllipse';
import { overrideRenderChannel } from './renderChannel';
import { overrideRenderGartley } from './renderGartley';
import { overrideRenderPitchfork } from './renderPitchfork';
import { overrideRenderRectangle } from './renderRectangle';
import { overrideRenderSegment } from './renderSegment';
import { overrideResizeObserver } from './resizeObserver';
import { BackingStore } from './backingStore';

const inject = (option: { drawToolsStore: DrawToolsStore }) => {
    createXAxis();
    drawCurrentPriceLine();
    maintainHeadsUpHR();
    plotterDrawText();
    overrideCalculateAwesome();
    overrideFindHighlights();
    overideMeasure(option);
    overrideRenderEllipse();
    overrideRenderChannel();
    overrideRenderGartley();
    overrideRenderPitchfork();
    overrideRenderRectangle();
    overrideRenderSegment();
    overrideResizeObserver();
    BackingStore();
};

export default inject;
