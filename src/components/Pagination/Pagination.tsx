import React, { FC } from 'react';
import Link from 'next/link';
import styles from  "./Pagination.module.scss"
import { useRouter } from 'next/router';
import cn from 'classnames';
interface IPagination {
  totalPages: number
  link: string
}
export const Pagination: FC<IPagination> = ({ totalPages, link}) => {
  const router = useRouter()
  console.log(router);
  return (
    <ul className={styles.pagination}>
      {
        [...new Array(totalPages)].map((_, index) => (
          <li className={cn(styles.paginationItem, router.query?.page as string == String(index + 1)
            && styles.activePage)}
              key={index}
          >
            <Link href={`${link}/${index + 1}`}>
              {index + 1}
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

