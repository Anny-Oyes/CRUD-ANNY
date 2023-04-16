import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({type: 'text', nullable:true})
  lastName?: string;

  @Column({type: 'text', nullable:true})
  direction?: string;

  @Column({type: 'text'})
  cell: string;

  @Column({type: 'text'})
  email: string;

  @Column({type: 'text'})
  paymentType: string;
}
