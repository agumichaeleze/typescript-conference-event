const schedule = [
  { time: "09:00 AM", title: "Opening Keynote", speaker: "Agu" },
  { time: "10:30 AM", title: "Building Cloud Apps", speaker: "Mike" },
  { time: "01:00 PM", title: "Design Thinking Workshop", speaker: " Eze" },
  { time: "03:00 PM", title: "AI Ethics Panel", speaker: "Panel Discussion" },
];

function Agenda() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Agenda</h2>
      <div className="grid md:grid-cols-2 gap-6 mx-auto text-center">
        {schedule.map((item, i) => (
          <div className="border-b-4 border-blue-600 pl-4 py-3"
          key={i}>
      <p className="text-sm text-muted">{item.time}</p>
      <h3 className="text-lg font-semibold text-muted">{item.title}</h3>
      <p className="text-muted">Speaker: {item.speaker}</p>
    </div>
        ))}
      </div>
    </div>
  );
}

export default Agenda;
