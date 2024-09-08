import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'cp_legal_structure'})
export class LegalStructure {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  legal_structure: string;

  @Column({ nullable: true })
  dba_name: string;

  @Column('text', { array: true, nullable: true })
  dba_files: string[];

  @Column('text', { array: true, nullable: true })
  completed_projects_files: string[];

  @Column({ default: false })
  legal_structure_changed: boolean;

  @Column({ nullable: true })
  legal_structure_changed_description: string;

  @Column({ default: false })
  corporation_own_operate_foreign_countries: boolean;

  @Column({ nullable: true })
  corporation_own_operate_foreign_countries_desc: string;

  @Column({ default: false })
  has_multiple_org_facilities: boolean;

}
