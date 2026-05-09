import { MdOutlineEmail } from "react-icons/md";
import NotificationCard, {
  type Notification,
} from "../../components/common/NotificationCard";
const notifications: Notification[] = [
  {
    id: 1,
    type: "user",
    avatar: "/public/images/avatar.png",
    name: "Zeeshan Khan",
    action: (
      <>
        submitted his &nbsp;<b>“AI & Ethics Report”</b>&nbsp; for Computer
        Science 101 just before the deadline — pending your review.
      </>
    ),
    time: "12 minutes ago",
  },
  {
    id: 2,
    type: "system",
    icon: <MdOutlineEmail className="text-mainColor text-xl" />,
    title:
      "No new message, You're all caught up! We'll let you know when something new happens.",
    message: null,
    time: "30 minutes ago",
  },
  {
    id: 3,
    type: "user",
    avatar: "/public/images/avatar.png",
    name: "Sara Malik",
    action: (
      <>
        uploaded new lecture files to Literature 202: &nbsp;
        <b>“ModernPoetry.pdf”</b>&nbsp; and &nbsp;
        <b>“LectureNotes_Week6.pptx”</b>.
      </>
    ),
    time: "5 hours ago",
  },
  {
    id: 4,
    type: "user",
    avatar: "/public/images/avatar.png",
    name: "Ali Raza",
    action: (
      <>
        has missed three assignments and two classes in History 101 — consider
        sending a follow-up or alerting a counselor.
      </>
    ),
    time: "1 week ago",
  },
  {
    id: 5,
    type: "system",
    icon: <MdOutlineEmail className="text-mainColor text-xl" />,
    title:
      "Calculus II final exam has been rescheduled from <b>July 12 to July 14 at 9:00 AM in Exam Hall B</b> — students will be notified.",
    message: null,
    time: "10 days ago",
  },
  {
    id: 6,
    type: "system",
    icon: <MdOutlineEmail className="text-mainColor text-xl" />,
    title:
      "Quiz results for Microeconomics were published — <b>25 students</b> scored above <b>80%</b>; ready to be reviewed and exported.",
    message: null,
    time: "1 month ago",
  },
];

const Notifications = () => {
  return (
    <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
      <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor bg-transparent text-left mb-8">
        Notifications
      </h1>
      <div className="flex flex-col gap-4">
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
