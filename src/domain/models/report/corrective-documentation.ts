import { Entity } from "../_entity";

export interface ICorrectiveDocumentationProps {
  photo?: string | undefined;
  video?: string | undefined;
}

export interface ICorrectiveDocumentation {
  unmarshall(): ICorrectiveDocumentationProps;
}

export class CorrectiveDocumentation
  extends Entity<ICorrectiveDocumentationProps>
  implements ICorrectiveDocumentation
{
  static create(props: ICorrectiveDocumentationProps) {
    return new CorrectiveDocumentation(props);
  }
  unmarshall(): ICorrectiveDocumentationProps {
    return {
      photo: this.photo,
      video: this.video,
    };
  }

  get photo(): string | undefined {
    return this._props.photo;
  }

  get video(): string | undefined {
    return this._props.video;
  }
}
