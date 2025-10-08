type DefaultInput = {
  type: string;
};

export function DefaultInput({ type }: DefaultInput) {
  return (
    <>
      <label htmlFor='meuInput'>Task</label>
      <input id='meuInput' type={type} />
    </>
  );
}
