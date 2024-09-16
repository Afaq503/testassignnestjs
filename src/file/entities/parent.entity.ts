import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Metadata } from './metadata.entity';

@Entity("Parent")
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @OneToMany(() => Metadata, (metadata) => metadata.parent, { cascade: true })
  children: Metadata[];
}
