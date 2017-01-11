enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length
}

enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A]