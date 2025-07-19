export class Maybe<T>{
    private constructor(private value: T | null) { }
    static ofNullable<T>(value: T | null): Maybe<T> {
        return new Maybe(value);
    }
    static some<T>(value: T): Maybe<T> {
        return new Maybe(value);
    }
    static none<T>(): Maybe<T> {
        return new Maybe<T>(null);
    }
    static of<T>(value: T): Maybe<T> {
        return new Maybe(value);
    }
    public flatMap<S>(TtoS: (T) => Maybe<S>): Maybe<S> {
        return this.value === null ? Maybe.none() : TtoS(this.value);
    }
    public flatMapNullable<S>(TtoS: (T) => S | null): Maybe<S> {
        return this.value === null ? Maybe.none() : Maybe.ofNullable(TtoS(this.value));
    }
    public map<S>(TtoS: (T) => S): Maybe<S> {
        return this.value === null ? Maybe.none() : Maybe.of(TtoS(this.value));
    }
    getOrElse(defaultValue: T): T {
        return this.value === null ? defaultValue : this.value;
    }
    getOrNull(): T | null {
        return this.value;
    }
    forYield<T>(other :Maybe<T>, yieldOperator:(x:T,y:T)=>T): Maybe<T>{
        return this.flatMap(
            (thisValue:T)=>other.map(
                (otherValue:T)=>yieldOperator(thisValue,otherValue)
            )
        )
    }
    forYieldNullable<T>(other :Maybe<T>, binaryOperator:(x:T,y:T)=>T): T| null{
        return this.forYield(other,binaryOperator).getOrNull();
    }
}