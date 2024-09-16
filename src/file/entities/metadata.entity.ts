import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Parent } from './parent.entity';

@Entity("Children")
export class Metadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  fileUrl: string;

  @ManyToOne(() => Parent, parent => parent.children)
  parent: Parent;
}
