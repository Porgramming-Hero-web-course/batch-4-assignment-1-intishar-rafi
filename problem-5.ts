function getProperty<ObjectType extends {}, PropertyKey extends keyof ObjectType & (string | number | symbol)>(
    object: ObjectType,
    key: PropertyKey
  ): ObjectType[PropertyKey] {
    if (!(key in object)) {
      throw new Error(`Property '${String(key)}' does not exist.`);
    }
    return object[key];
  }