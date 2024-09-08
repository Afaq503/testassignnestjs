
export class CreateLegalStructureDto {
  legal_structure: string;

  dba_name?: string;

  dba_files?: string[];

  completed_projects_files?: string[];

  legal_structure_changed?: boolean;

  legal_structure_changed_description?: string;

  corporation_own_operate_foreign_countries?: boolean;

  corporation_own_operate_foreign_countries_desc?: string;

  has_multiple_org_facilities?: boolean;
}
