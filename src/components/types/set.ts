type SetFunctionType<StoreType> = (
  partial: StoreType | Partial<StoreType> | ((state: StoreType) => StoreType),
  replace?: boolean | undefined
) => void;

export default SetFunctionType;
