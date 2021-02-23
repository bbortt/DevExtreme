import registerComponent from '../../../core/component_registrator';
import SchedulerTimeline from './ui.scheduler.timeline';

const TIMELINE_CLASS = 'dx-scheduler-timeline-hour';

class SchedulerTimelineHour extends SchedulerTimeline {
    _getElementClass() {
        return TIMELINE_CLASS;
    }
}

registerComponent('dxSchedulerTimelineHour', SchedulerTimelineHour);

export default SchedulerTimelineHour;
