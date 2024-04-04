const Welcome = ({ name, isMember }) => {
  return (
    <> {isMember ? `${name}님 다시 오셨군요.` : `${name}님 가입 하시겠어요?`}</>
  );
};

export default Welcome;
