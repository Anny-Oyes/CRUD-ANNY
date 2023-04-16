import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Computer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  brand: string;

  @Column({type: 'text', nullable:true})
  description?: string;

  @Column({type: 'text'})
  components: string;

  @Column({type: 'text'})
  properties: string;

  @Column({type: 'text', nullable: true})
  color?: string;

  @Column({type: 'numeric'})
  price: number;
}
