# Setar Constraints

Precisei dos seguintes SQLs para conseguir fazer a mudança das constraints

- Mudando a constraint da view para ser setada como nula.

```sql
ALTER TABLE public.rel_group_view drop constraint rel_group_view_view_id_fkey;
ALTER TABLE public.rel_group_view
    ADD CONSTRAINT rel_group_view_view_id_fkey FOREIGN KEY (view_id)
    REFERENCES public.views (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE SET NULL;
```

- Mudando a constraint do grupo para deletar CASCADE.

```sql
ALTER TABLE public.rel_group_view DROP CONSTRAINT rel_group_view_group_id_fkey;

ALTER TABLE public.rel_group_view
    ADD CONSTRAINT rel_group_view_group_id_fkey FOREIGN KEY (group_id)
    REFERENCES public.groups (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE;
```
