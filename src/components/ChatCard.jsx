/* eslint-disable react/prop-types */

const getInitials = (nameOrEmail) => {
  const name = nameOrEmail.trim().split(' ');
  if (name.length === 1) {
    return name[0].substring(0, 2).toUpperCase();
  } else {
    return name[0][0].toUpperCase() + name[1][0].toUpperCase();
  }
};

const getRandomGradient = () => {
  const colors = [
    '#FF5733', '#FF8D1A', '#FFC300', '#DAF7A6', '#33FF57', 
    '#33FFF7', '#339CFF', '#8D33FF', '#FF33B8', '#FF3389'
  ];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
};

const formatDate = (dateString) => {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  const date = new Date(dateString);
  return date.toLocaleString('en-US', options);
};

const ChatCard = ({ chatData }) => {
  const nameOrEmail = chatData.creator.name || chatData.creator.email;
  const initials = getInitials(nameOrEmail);
  const gradient = getRandomGradient();
  const formattedDate = formatDate(chatData.updated_at);

  return (
    <div className="relative flex items-center gap-2 p-2 w-full">
      <div
        className="p-4 rounded-full flex items-center justify-center"
        style={{ background: gradient, width: 40, height: 40, color: '#fff' }}
      >
        <p>{initials}</p>
      </div>
      <div className="info">
        <p className="font-bold text-sm">{nameOrEmail}</p>
        <p className="text-xs">Last seen: 3 hours ago</p>
      </div>
      <div className="absolute right-0">
        <p className="text-xs">{formattedDate}</p>
        <div className="absolute right-0 top-6 bg-gray-400 text-white text-center flex justify-center items-center p-2 rounded-full w-6 h-5 text-xs font-semibold">
          <p>{chatData.msg_count}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
