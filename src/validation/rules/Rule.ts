import { ISchema } from '../interfaces/ISchema';

export abstract class Rule implements ISchema {
	private _name?: string;
	private _key?: string;
	protected _message?: string;

	constructor (name: string, message?: string, key?: string) {
		this._name = name;
		this._message = message;
		this._key = key;
	}

	abstract checkIsFail (value: any): boolean;

	validate (input: any): void {
		if (this.checkIsFail(input)) {
			throw new Error(`${this._key ? this._key + ': ' : ''}${this._message}`);
		}
	}
}
