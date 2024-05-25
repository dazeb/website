/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Follow as PrismaFollow } from "@prisma/client";

export class FollowServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FollowCountArgs, "select">): Promise<number> {
    return this.prisma.follow.count(args);
  }

  async follows<T extends Prisma.FollowFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FollowFindManyArgs>
  ): Promise<PrismaFollow[]> {
    return this.prisma.follow.findMany<Prisma.FollowFindManyArgs>(args);
  }
  async follow<T extends Prisma.FollowFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FollowFindUniqueArgs>
  ): Promise<PrismaFollow | null> {
    return this.prisma.follow.findUnique(args);
  }
  async createFollow<T extends Prisma.FollowCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FollowCreateArgs>
  ): Promise<PrismaFollow> {
    return this.prisma.follow.create<T>(args);
  }
  async updateFollow<T extends Prisma.FollowUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FollowUpdateArgs>
  ): Promise<PrismaFollow> {
    return this.prisma.follow.update<T>(args);
  }
  async deleteFollow<T extends Prisma.FollowDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FollowDeleteArgs>
  ): Promise<PrismaFollow> {
    return this.prisma.follow.delete(args);
  }
}