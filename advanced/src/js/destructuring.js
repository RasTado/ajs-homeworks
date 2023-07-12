export default function destruct(data) {
  const { special } = data;
  const result = special.map(
    ({
      id, name, description = "Описание недоступно", icon,
    }) => ({
      id,
      name,
      description,
      icon,
    }),
  );
  return result;
}
