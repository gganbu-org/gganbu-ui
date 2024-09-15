type ArgTypeTable = {
  table: {
    disable: boolean;
  };
};

type ArgTypes = Record<string, ArgTypeTable>;

export const generateArgTypesToDisable = <T extends string>(args: T[]) =>
  args.reduce<ArgTypes>((argTypes, propName) => {
    const value = { table: { disable: true } };

    return { ...argTypes, [propName]: value };
  }, {});
