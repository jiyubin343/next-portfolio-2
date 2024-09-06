export default function ProjectItem({data}) {
    const title = data.properties.이름.title[0]?.plain_text;
    const tag = data.properties.태그.multi_select;
    const startDate = data.properties?.작업기간.date.start;
    const endDate = data.properties?.작업기간.date.end;

    function countWorkDays(Start, End) {
        const StartDate = new Date(Start);
        const EndDate = End ? new Date(End) : new Date();

        let workdays = 0;
        let currentDate = new Date(StartDate);

        while (currentDate <= EndDate) {
            workdays++;
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return workdays;
    }

    return (
        <div>
            <h3>작업일 : {countWorkDays(startDate, endDate)}일</h3>
            <span>{title}</span>
        </div>
    );
}
