// import CommonEntity from '@server/common/configs/common-entity';

// // @Entity('permission')
// // export class PermissionEntity extends CommonEntity {
// //   @Column({ type: 'varchar', unique: true })
// //   name: string;
// // }

// // @Entity('role')
// // export class RoleEntity extends CommonEntity {
// //   @Column({ type: 'varchar', unique: true })
// //   name: string;

// //   @ManyToMany(() => PermissionEntity, { eager: true })
// //   @JoinTable()
// //   permissions: PermissionEntity[];
// // }

// @Entity('user')
// export class UserEntity extends CommonEntity {
//   @Column({ type: 'varchar', unique: true })
//   email: string;

//   @Column({ type: 'varchar', nullable: true })
//   phone: string;

//   @Column({ type: 'varchar', nullable: true })
//   roles: string[];

//   @Column({ type: 'varchar', nullable: true })
//   firstname?: string;

//   @Column({ type: 'varchar', nullable: true })
//   lastname?: string;

//   @Column({ type: 'varchar' })
//   password: string;

//   @Column({ type: 'boolean', default: false })
//   emailVerified: boolean;

//   @Column({ type: 'boolean', default: false })
//   is2fa: boolean;

//   @Column({ type: 'boolean', default: false })
//   disableAccess: boolean;
// }
