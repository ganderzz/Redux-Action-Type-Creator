export as namespace createActionType;

export = createActionType;

declare function createActionType<K extends string>(...type: K[]): Readonly<{ [P in K]: string }>;