import React, { FC } from 'react';
import Link from 'next/link';
import styles from './Pagination.module.scss';
import { useRouter } from 'next/router';
import cn from 'classnames';

interface IPagination {
  totalPages: number;
  link: string;
}

export const Pagination: FC<IPagination> = ({ totalPages, link }) => {
  const router = useRouter();
  return (
    <ul className={styles.pagination}>
      <span>Страница {router.query.page} из {totalPages}</span>
      {
        [...new Array(totalPages)].map((_, index) => (
          <Link key={index} className={styles.i} href={`${link}/${index + 1}`}>

            <li className={cn(styles.paginationItem, router.query?.page as string == String(index + 1)
              && styles.activePage)}
                key={index}
            >
              {index + 1}
            </li>
          </Link>
        ))
      }
    </ul>
  );
};

