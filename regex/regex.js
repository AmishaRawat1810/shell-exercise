const divisibleBy2 = {
  q0: { "0": "q1", isFinal: false },
  q1: { "0": "q2", isFinal: false },
  q2: { "0": "q1", isFinal: true },
};

const divisibleBy3 = {
  q0: { "0": "q1", isFinal: false },
  q1: { "0": "q2", isFinal: false },
  q2: { "0": "q3", isFinal: false },
  q3: { "0": "q1", isFinal: true },
};

const isMember = (dfa, string) => {
  const initial = "q0";
  const finalState = [...string].reduce(
    (initialState, member) => dfa[initialState][member],
    initial,
  );
  return dfa[finalState]["isFinal"];
};
