export default function useThenable<T>(create: () => {
    then(success: (result: T) => void, error?: (error: any) => void): void;
}): [boolean, T | undefined];
